const db = require("./index");
const { db_user } = require("./config");

const setupDBFunctions = async () => {
  await db.query(`
  CREATE OR REPLACE FUNCTION public.uuid_generate_v4(
    )
      RETURNS uuid
      LANGUAGE 'c'
      COST 1
      VOLATILE STRICT PARALLEL SAFE 
  AS '$libdir/uuid-ossp', 'uuid_generate_v4';
  `);
};

const setupUserTable = async () => {
  await db.query(`
    CREATE SCHEMA IF NOT EXISTS hikers;
    CREATE SEQUENCE IF NOT EXISTS user_id_seq;
    CREATE TABLE IF NOT EXISTS hikers.users
    (
        loginid TEXT NOT NULL DEFAULT (('HKR'::text || to_char((CURRENT_DATE)::timestamp with time zone, 'YYYYMMDD'::text)) || lpad((nextval('user_id_seq'::regclass))::text, 18, '0'::text)),
        username TEXT NOT NULL,
        full_name TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL,
        phone TEXT,
        date_joined TIMESTAMPTZ,
        user_img TEXT,
        CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY (loginid),
        CONSTRAINT "UQ_4c8f96ccf523e9a3faefd5bdd4c" UNIQUE (email)
    );
    `);

  await db.query("GRANT ALL ON hikers.users to postgres;");
};

const setupWalletTable = async () => {
  await db.query(`
    CREATE TABLE IF NOT EXISTS hikers.wallet
    (
        id uuid NOT NULL DEFAULT uuid_generate_v4(),
        currency character varying COLLATE pg_catalog."default" NOT NULL,
        balance numeric(8,0) NOT NULL DEFAULT '0'::numeric,
        "loginid" TEXT,
        CONSTRAINT "PK_bec464dd8d54c39c54fd32e2334" PRIMARY KEY (id),
        CONSTRAINT "FK_276aecaae66a8b798156f70fc4b" FOREIGN KEY ("loginid")
            REFERENCES hikers.users (loginid) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
    )
`);

  await db.query("GRANT ALL ON hikers.wallet to postgres;");
};

const setupTransactionTable = async () => {
  await db.query(``);
};

(async () => {
  try {
    await setupDBFunctions();
  } catch (e) {
    console.log("Error setting up functions: " + e);
  }

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
