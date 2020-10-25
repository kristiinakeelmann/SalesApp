create table item
(
    id           integer auto_increment primary key,
    name         varchar(255)          not null,
    price        double precision,
    quantity     int4,
);

insert into item (name, price, quantity)
values ('Brownie', 0.65, 10),
       ('Muffin', 1, 10),
       ('Cake pop', 1.35, 5),
       ('Apple tart', 1.50, 10),
       ('Water', 1.50, 6),
       ('Shirt', 2, 0),
       ('Pants', 3, 0),
       ('Jacket', 4, 0),
       ('Toy', 1, 0);