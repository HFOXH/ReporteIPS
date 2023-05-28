CREATE DATABASE ReporteIPS;

CREATE TABLE Reportes(
ReporteId INT IDENTITY(0,1) PRIMARY KEY NOT NULL,
Estado VARCHAR(30) NOT NULL,
PacienteId DECIMAL(15) NOT NULL,
NombreReporte VARCHAR(40) NOT NULL,
Fecha DATE NOT NULL --La hora se debe tomar automaticamente apenas se guarde el reporte
);

CREATE TABLE Pacientes(
PacienteId DECIMAL(15) NOT NULL,
Nombres VARCHAR(50) NOT NULL,
Apellidos VARCHAR(50) NOT NULL,
Genero VARCHAR(1) NOT NULL,
FechaNacimiento DATE NOT NULL,
Correo VARCHAR(50) NOT NULL,
Celular DECIMAL(11) NOT NULL
);

CREATE TABLE Doctores(
DoctorId DECIMAL(15) NOT NULL,
Nombres VARCHAR(50) NOT NULL,
Apellidos VARCHAR(50) NOT NULL,
FechaNacimiento DATE NOT NULL,
Correo VARCHAR(50) NOT NULL,
Celular DECIMAL(11) NOT NULL,
UsuarioDoctor VARCHAR(50) NOT NULL,
PasswordDoctor VARCHAR(MAX) NOT NULL
);

