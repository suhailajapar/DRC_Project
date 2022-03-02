const db = require("./index");
const { db_user } = require("./config");

const setupUserTable = (async = () => {
  await db.query(`
    CREATE SCHEMA IF NOT EXISTS hikers;
    CREATE SEQUENCE IF NOT EXISTS user_id_seq;
    CREATE TABLE IF NOT EXISTS hikers.users
    (
        loginid TEXT NOT NULL DEFAULT (('HKR'::text || to_char((CURRENT_DATE)::timestamp with time zone, 'YYYYMMDD'::text)) || lpad((nextval('user_id_seq'::regclass))::text, 18, '0'::text)),
        username TEXT NOT NULL,
        full_name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        phone TEXT,
        date_joined TIMESTAMPTZ,
        user_img TEXT,
        PRIMARY KEY (loginid)
    )
    `);

  await db.query(`GRANT ALL ON hikers.user to $1`, [db_user]);
});

const setupWalletTable = async () => {
  await db.query(`
    CREATE TABLE IF NOT EXISTS hikers.wallet
    (
      wallet_id uuid NOT NULL DEFAULT uuid_generate_v4(),
      currency VARCHAR(255) NOT NULL,
      balance NUMERIC(8,0) NOT NULL DEFAULT '0'::numeric,
      loginid TEXT,
	    PRIMARY KEY (wallet_id),
      CONSTRAINT fk_user FOREIGN KEY (loginid)
          REFERENCES hikers.users (loginid)
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
