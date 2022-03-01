const db = require("./index");
const { db_user } = require("./config");

const setupUserTable = (async = () => {
  await db.query(`
    CREATE TABLE IF NOT EXISTS hikers.users
    (
        loginid text COLLATE pg_catalog."default" NOT NULL DEFAULT (('HKR'::text || to_char((CURRENT_DATE)::timestamp with time zone, 'YYYYMMDD'::text)) || lpad((nextval('user_id_seq'::regclass))::text, 18, '0'::text)),
        username text COLLATE pg_catalog."default" NOT NULL,
        full_name text COLLATE pg_catalog."default" NOT NULL,
        email text COLLATE pg_catalog."default" NOT NULL,
        password text COLLATE pg_catalog."default" NOT NULL,
        phone text COLLATE pg_catalog."default",
        date_joined timestamp with time zone,
        user_img text COLLATE pg_catalog."default",
        CONSTRAINT users_email_key UNIQUE (email)
    )
    `);

  await db.query(`GRANT ALL ON hikers.user to $1`, [db_user]);
});

const setupWalletTable = async () => {
  await db.query(`
    CREATE TABLE IF NOT EXISTS hikers.wallet
    (
        id uuid NOT NULL DEFAULT uuid_generate_v4(),
        currency character varying COLLATE pg_catalog."default" NOT NULL,
        balance numeric(8,0) NOT NULL DEFAULT '0'::numeric,
        "loginid" text,
        CONSTRAINT "PK_bec464dd8d54c39c54fd32e2334" PRIMARY KEY (id),
        CONSTRAINT "FK_276aecaae66a8b798156f70fc4b" FOREIGN KEY ("loginid")
            REFERENCES hikers.users (loginid) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
    )
`);

  await db.query(`GRANT ALL ON hikers.wallet to $1`, [db_user]);
};

const setupTransactionTable = async () => {
  await db.query(``);
};

(async () => {
  console.log("Setting up User table");
  try {
    await setupUserTable();
  } catch (e) {
    console.log("Error setting up User table: " + e);
  }

  console.log("Setting up Wallet table");
  try {
    await setupWalletTable();
  } catch (e) {
    console.log("Error setting up Wallet table: " + e);
  }
})();
