create table users(
                      user_id varchar(36) PRIMARY KEY,
                      username varchar(36) not null unique,
                      email varchar(36) not null,
                      password varchar(255) not null ,
                      role varchar(20) check (role in ('admin', 'teacher', 'student', 'staff')) default 'student',
                      created_at timestamp default current_timestamp,
                      updated_at timestamp default current_timestamp
);

create table student(
                        student_id varchar(36) PRIMARY KEY,
                        first_name varchar(100) not null,
                        last_name varchar(100),
                        place_of_birth varchar(50),
                        date_of_birth date,
                        school varchar(100),
                        class varchar(10),
                        address varchar(255),
                        phone varchar(20),
                        image varchar(255),
                        user_id varchar(36) not null,
                        created_at timestamp default current_timestamp,
                        updated_at timestamp default current_timestamp,
                        foreign key (user_id) references users(user_id)
);

create table teacher(
                        teacher_id varchar(36) PRIMARY KEY,
                        first_name varchar(100) not null,
                        last_name varchar(100),
                        place_of_birth varchar(50),
                        date_of_birth date,
                        school varchar(100),
                        address varchar(255),
                        phone varchar(20),
                        image varchar(255),
                        user_id varchar(36) not null,
                        created_at timestamp default current_timestamp,
                        updated_at timestamp default current_timestamp,
                        foreign key (user_id) references users(user_id)
);

create table admin(
                      admin_id varchar(36) PRIMARY KEY,
                      first_name varchar(100) not null,
                      last_name varchar(100),
                      image varchar(255),
                      user_id varchar(36) not null,
                      created_at timestamp default current_timestamp,
                      updated_at timestamp default current_timestamp,
                      foreign key (user_id) references users(user_id)
);