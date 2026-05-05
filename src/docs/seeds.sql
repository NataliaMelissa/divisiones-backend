
-- DIVISIONES
INSERT INTO division (nombre, embajador, padreId) VALUES 
('Dirección General', 'Ana Martínez', NULL),      -- ID: 1
('Operaciones', 'Carlos Ruiz', 1),                -- ID: 2
('Estrategia y Finanzas', 'Elena Soler', 1),      -- ID: 3
('Logística', 'Luis Páez', 2),                    -- ID: 4
('Producción', 'Marta Tello', 2),                 -- ID: 5
('Marketing', 'Jorge Luna', 3),                   -- ID: 6
('Recursos Humanos', 'Sofía Villa', 3),           -- ID: 7
('Almacén', 'Pedro Gómez', 4),                    -- ID: 8
('Transporte', 'Lucía Sanz', 4),                  -- ID: 9
('Publicidad Digital', 'Kevin Rojas', 6);         -- ID: 10


--COLABORADORES
INSERT INTO colaborador (nombre, divisionId) VALUES
    -- Dirección General:
    ('Tony Stark', 1),
    ('Pepper Potts', 1),

    -- Operaciones:
    ('Leia Organa', 2),
    ('Han Solo', 2),
    ('Chewbacca', 2),
    ('Lando Calrissian', 2),
    ('Wedge Antilles', 2),

    -- RRHH:
    ('Sherlock Holmes', 3),
    ('John Watson', 3),

    -- Finanzas:
    ('Bruce Wayne', 4),
    ('Alfred Pennyworth', 4),

    -- Producción:
    ('Ellen Ripley', 5),
    ('Arthur Dallas', 5),

    -- Logística:
    ('Walter White', 6),
    ('Jesse Pinkman', 6),

    -- Reclutamiento:
    ('Diana Prince', 7),
    ('Steve Trevor', 7),

    -- Compensaciones:
    ('Indiana Jones', 8),
    ('Marion Ravenwood', 8),

    -- Contabilidad:
    ('Hermione Granger', 9),
    ('Ron Weasley', 9),

    -- Tesorería:
    ('Marty McFly', 10),
    ('Doc Brown', 10),
    ('Jennifer Parker', 10),
    ('Biff Tannen', 10),
    ('George McFly', 10),
    ('Lorraine Baines', 10),
    ('Einstein Dog', 10);