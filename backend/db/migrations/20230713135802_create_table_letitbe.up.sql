create table users(
                      id int primary key auto_increment,
                      firstname varchar(255),
                      lastname varchar(255),
                      username varchar(255) not null unique,
                      email varchar(255) not null unique,
                      password varchar(255) not null,
                      role varchar(255) default 'user',
                      avatar varchar(255) default 'https://myloview.com/sticker-default-avatar-profile-icon-vector-unknown-social-media-user-no-C842796',
                      created_at timestamp default current_timestamp,
                      updated_at timestamp default current_timestamp on update current_timestamp
)engine=InnoDB default charset=utf8mb4;

create table subjects (
                          id int primary key auto_increment,
                          subject_name varchar(255) not null unique ,
                          avatar varchar(255) default 'https://myloview.com/sticker-default-avatar-profile-icon-vector-unknown-social-media-user-no-C842796',
                          updated_at timestamp default current_timestamp on update current_timestamp
)engine=InnoDB default charset=utf8mb4;

create table classes (
                         id int primary key auto_increment,
                         class_name varchar(255) not null unique,
                         subject_id int not null,
                         description text,
                         constraint fk_classes_subjects foreign key (subject_id) references subjects(id),
                         created_at timestamp default current_timestamp,
                         updated_at timestamp default current_timestamp on update current_timestamp
)engine=InnoDB default charset=utf8mb4;

create table subtopics (
                           id int primary key auto_increment,
                           subtopic_name varchar(255) not null unique,
                           description text,
                           class_id int not null,
                           constraint fk_subtopics_classes foreign key (class_id) references classes(id),
                           created_at timestamp default current_timestamp,
                           updated_at timestamp default current_timestamp on update current_timestamp
)engine=InnoDB default charset=utf8mb4;

create table videos(
                       video_id varchar(255) not null primary key,
                       video_name varchar(255) not null unique,
                       thumbnail varchar(255) not null,
                       description TEXT,
                       subtopic_id int not null,
                       constraint fk_videos_subtopics foreign key (subtopic_id) references subtopics(id),
                       created_at timestamp default current_timestamp,
                       updated_at timestamp default current_timestamp on update current_timestamp
)engine=InnoDB default charset=utf8mb4;


