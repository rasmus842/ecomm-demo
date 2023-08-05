CREATE USER ecomm WITH PASSWORD 'ecomm';
CREATE SCHEMA ecomm;
GRANT ALL ON ALL TABLES IN SCHEMA ecomm TO ecomm;
ALTER USER ecomm SET search_path TO ecomm;