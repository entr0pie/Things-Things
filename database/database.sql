CREATE TABLE IF NOT EXISTS customers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  surname TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  date_of_birth TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  password TEXT NOT NULL
);

INSERT INTO customers (name, surname, email, date_of_birth, phone_number, password)
VALUES
  ('José', 'Silva', 'jose.silva@example.com', '1985-05-10', '(11) 98765-4321', 'password1'),
  ('Maria', 'Santos', 'maria.santos@example.com', '1990-08-20', '(21) 98765-4321', 'password2'),
  ('Carlos', 'Ferreira', 'carlos.ferreira@example.com', '1988-02-15', '(31) 98765-4321', 'password3'),
  ('Ana', 'Lima', 'ana.lima@example.com', '1995-11-30', '(41) 98765-4321', 'password4');
