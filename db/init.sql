DROP TABLE IF EXISTS bugs;
DROP TABLE IF EXISTS fishies;
DROP TABLE IF EXISTS flowers;
DROP TABLE IF EXISTS fossils;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

INSERT INTO users (username, password)
VALUES ('jorochungo', '$2b$12$OB9R5hGXaPXcKfT6NW5OOOkTqebS/pDXrUa6.DhqfXn9X3jw2sYN6');

CREATE TABLE fishies (
    fishies_id SERIAL PRIMARY KEY,
    f1 INTEGER NOT NULL,
    f2 INTEGER NOT NULL,
    f3 INTEGER NOT NULL,
    f4 INTEGER NOT NULL,
    f5 INTEGER NOT NULL,
    f6 INTEGER NOT NULL,
    f7 INTEGER NOT NULL,
    f8 INTEGER NOT NULL,
    f9 INTEGER NOT NULL,
    f10 INTEGER NOT NULL,
    f11 INTEGER NOT NULL,
    f12 INTEGER NOT NULL,
    f13 INTEGER NOT NULL,
    f14 INTEGER NOT NULL,
    f15 INTEGER NOT NULL,
    f16 INTEGER NOT NULL,
    f17 INTEGER NOT NULL,
    f18 INTEGER NOT NULL,
    f19 INTEGER NOT NULL,
    f20 INTEGER NOT NULL,
    f21 INTEGER NOT NULL,
    f22 INTEGER NOT NULL,
    f23 INTEGER NOT NULL,
    f24 INTEGER NOT NULL,
    f25 INTEGER NOT NULL,
    f26 INTEGER NOT NULL,
    f27 INTEGER NOT NULL,
    f28 INTEGER NOT NULL,
    f29 INTEGER NOT NULL,
    f30 INTEGER NOT NULL,
    f31 INTEGER NOT NULL,
    f32 INTEGER NOT NULL,
    f33 INTEGER NOT NULL,
    f34 INTEGER NOT NULL,
    f35 INTEGER NOT NULL,
    f36 INTEGER NOT NULL,
    f37 INTEGER NOT NULL,
    f38 INTEGER NOT NULL,
    f39 INTEGER NOT NULL,
    f40 INTEGER NOT NULL,
    f41 INTEGER NOT NULL,
    f42 INTEGER NOT NULL,
    f43 INTEGER NOT NULL,
    f44 INTEGER NOT NULL,
    f45 INTEGER NOT NULL,
    f46 INTEGER NOT NULL,
    f47 INTEGER NOT NULL,
    f48 INTEGER NOT NULL,
    f49 INTEGER NOT NULL,
    f50 INTEGER NOT NULL,
    f51 INTEGER NOT NULL,
    f52 INTEGER NOT NULL,
    f53 INTEGER NOT NULL,
    f54 INTEGER NOT NULL,
    f55 INTEGER NOT NULL,
    f56 INTEGER NOT NULL,
    f57 INTEGER NOT NULL,
    f58 INTEGER NOT NULL,
    f59 INTEGER NOT NULL,
    f60 INTEGER NOT NULL,
    f61 INTEGER NOT NULL,
    f62 INTEGER NOT NULL,
    f63 INTEGER NOT NULL,
    f64 INTEGER NOT NULL,
    f65 INTEGER NOT NULL,
    f66 INTEGER NOT NULL,
    f67 INTEGER NOT NULL,
    f68 INTEGER NOT NULL,
    f69 INTEGER NOT NULL,
    f70 INTEGER NOT NULL,
    f71 INTEGER NOT NULL,
    f72 INTEGER NOT NULL,
    f73 INTEGER NOT NULL,
    f74 INTEGER NOT NULL,
    f75 INTEGER NOT NULL,
    f76 INTEGER NOT NULL,
    f77 INTEGER NOT NULL,
    f78 INTEGER NOT NULL,
    f79 INTEGER NOT NULL,
    f80 INTEGER NOT NULL,
    user_id INTEGER REFERENCES users(user_id)
);

INSERT INTO fishies (user_id, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, f16, f17, f18, f19, f20, f21, f22, f23, f24, f25, f26, f27, f28, f29, f30, f31, f32, f33, f34, f35, f36, f37, f38, f39, f40, f41, f42, f43, f44, f45, f46, f47, f48, f49, f50, f51, f52, f53, f54, f55, f56, f57, f58, f59, f60, f61, f62, f63, f64, f65, f66, f67, f68, f69, f70, f71, f72, f73, f74, f75, f76, f77, f78, f79, f80)
VALUES (1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

CREATE TABLE bugs (
    bugs_id SERIAL PRIMARY KEY,
    b1 INTEGER NOT NULL,
    b2 INTEGER NOT NULL,
    b3 INTEGER NOT NULL,
    b4 INTEGER NOT NULL,
    b5 INTEGER NOT NULL,
    b6 INTEGER NOT NULL,
    b7 INTEGER NOT NULL,
    b8 INTEGER NOT NULL,
    b9 INTEGER NOT NULL,
    b10 INTEGER NOT NULL,
    b11 INTEGER NOT NULL,
    b12 INTEGER NOT NULL,
    b13 INTEGER NOT NULL,
    b14 INTEGER NOT NULL,
    b15 INTEGER NOT NULL,
    b16 INTEGER NOT NULL,
    b17 INTEGER NOT NULL,
    b18 INTEGER NOT NULL,
    b19 INTEGER NOT NULL,
    b20 INTEGER NOT NULL,
    b21 INTEGER NOT NULL,
    b22 INTEGER NOT NULL,
    b23 INTEGER NOT NULL,
    b24 INTEGER NOT NULL,
    b25 INTEGER NOT NULL,
    b26 INTEGER NOT NULL,
    b27 INTEGER NOT NULL,
    b28 INTEGER NOT NULL,
    b29 INTEGER NOT NULL,
    b30 INTEGER NOT NULL,
    b31 INTEGER NOT NULL,
    b32 INTEGER NOT NULL,
    b33 INTEGER NOT NULL,
    b34 INTEGER NOT NULL,
    b35 INTEGER NOT NULL,
    b36 INTEGER NOT NULL,
    b37 INTEGER NOT NULL,
    b38 INTEGER NOT NULL,
    b39 INTEGER NOT NULL,
    b40 INTEGER NOT NULL,
    b41 INTEGER NOT NULL,
    b42 INTEGER NOT NULL,
    b43 INTEGER NOT NULL,
    b44 INTEGER NOT NULL,
    b45 INTEGER NOT NULL,
    b46 INTEGER NOT NULL,
    b47 INTEGER NOT NULL,
    b48 INTEGER NOT NULL,
    b49 INTEGER NOT NULL,
    b50 INTEGER NOT NULL,
    b51 INTEGER NOT NULL,
    b52 INTEGER NOT NULL,
    b53 INTEGER NOT NULL,
    b54 INTEGER NOT NULL,
    b55 INTEGER NOT NULL,
    b56 INTEGER NOT NULL,
    b57 INTEGER NOT NULL,
    b58 INTEGER NOT NULL,
    b59 INTEGER NOT NULL,
    b60 INTEGER NOT NULL,
    b61 INTEGER NOT NULL,
    b62 INTEGER NOT NULL,
    b63 INTEGER NOT NULL,
    b64 INTEGER NOT NULL,
    b65 INTEGER NOT NULL,
    b66 INTEGER NOT NULL,
    b67 INTEGER NOT NULL,
    b68 INTEGER NOT NULL,
    b69 INTEGER NOT NULL,
    b70 INTEGER NOT NULL,
    b71 INTEGER NOT NULL,
    b72 INTEGER NOT NULL,
    b73 INTEGER NOT NULL,
    b74 INTEGER NOT NULL,
    b75 INTEGER NOT NULL,
    b76 INTEGER NOT NULL,
    b77 INTEGER NOT NULL,
    b78 INTEGER NOT NULL,
    b79 INTEGER NOT NULL,
    b80 INTEGER NOT NULL,
    user_id INTEGER REFERENCES users(user_id)
);

INSERT INTO bugs (user_id, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49, b50, b51, b52, b53, b54, b55, b56, b57, b58, b59, b60, b61, b62, b63, b64, b65, b66, b67, b68, b69, b70, b71, b72, b73, b74, b75, b76, b77, b78, b79, b80)
VALUES (1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

CREATE TABLE flowers (
    flowers_id SERIAL PRIMARY KEY,
    fl1 INTEGER NOT NULL,
    fl2 INTEGER NOT NULL,
    fl3 INTEGER NOT NULL,
    fl4 INTEGER NOT NULL,
    fl5 INTEGER NOT NULL,
    fl6 INTEGER NOT NULL,
    fl7 INTEGER NOT NULL,
    fl8 INTEGER NOT NULL,
    fl9 INTEGER NOT NULL,
    fl10 INTEGER NOT NULL,
    fl11 INTEGER NOT NULL,
    fl12 INTEGER NOT NULL,
    fl13 INTEGER NOT NULL,
    fl14 INTEGER NOT NULL,
    fl15 INTEGER NOT NULL,
    fl16 INTEGER NOT NULL,
    fl17 INTEGER NOT NULL,
    fl18 INTEGER NOT NULL,
    fl19 INTEGER NOT NULL,
    fl20 INTEGER NOT NULL,
    fl21 INTEGER NOT NULL,
    fl22 INTEGER NOT NULL,
    fl23 INTEGER NOT NULL,
    fl24 INTEGER NOT NULL,
    fl25 INTEGER NOT NULL,
    fl26 INTEGER NOT NULL,
    fl27 INTEGER NOT NULL,
    fl28 INTEGER NOT NULL,
    fl29 INTEGER NOT NULL,
    fl30 INTEGER NOT NULL,
    fl31 INTEGER NOT NULL,
    fl32 INTEGER NOT NULL,
    fl33 INTEGER NOT NULL,
    fl34 INTEGER NOT NULL,
    fl35 INTEGER NOT NULL,
    fl36 INTEGER NOT NULL,
    fl37 INTEGER NOT NULL,
    fl38 INTEGER NOT NULL,
    fl39 INTEGER NOT NULL,
    fl40 INTEGER NOT NULL,
    fl41 INTEGER NOT NULL,
    fl42 INTEGER NOT NULL,
    fl43 INTEGER NOT NULL,
    fl44 INTEGER NOT NULL,
    fl45 INTEGER NOT NULL,
    fl46 INTEGER NOT NULL,
    fl47 INTEGER NOT NULL,
    fl48 INTEGER NOT NULL,
    fl49 INTEGER NOT NULL,
    fl50 INTEGER NOT NULL,
    fl51 INTEGER NOT NULL,
    fl52 INTEGER NOT NULL,
    fl53 INTEGER NOT NULL,
    fl54 INTEGER NOT NULL,
    user_id INTEGER REFERENCES users(user_id)
);

INSERT INTO flowers (user_id, fl1, fl2, fl3, fl4, fl5, fl6, fl7, fl8, fl9, fl10, fl11, fl12, fl13, fl14, fl15, fl16, fl17, fl18, fl19, fl20, fl21, fl22, fl23, fl24, fl25, fl26, fl27, fl28, fl29, fl30, fl31, fl32, fl33, fl34, fl35, fl36, fl37, fl38, fl39, fl40, fl41, fl42, fl43, fl44, fl45, fl46, fl47, fl48, fl49, fl50, fl51, fl52, fl53, fl54)
VALUES (1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

CREATE TABLE fossils (
    fossils_id SERIAL PRIMARY KEY,
    fo1 INTEGER NOT NULL,
    fo2 INTEGER NOT NULL,
    fo3 INTEGER NOT NULL,
    fo4 INTEGER NOT NULL,
    fo5 INTEGER NOT NULL,
    fo6 INTEGER NOT NULL,
    fo7 INTEGER NOT NULL,
    fo8 INTEGER NOT NULL,
    fo9 INTEGER NOT NULL,
    fo10 INTEGER NOT NULL,
    fo11 INTEGER NOT NULL,
    fo12 INTEGER NOT NULL,
    fo13 INTEGER NOT NULL,
    fo14 INTEGER NOT NULL,
    fo15 INTEGER NOT NULL,
    fo16 INTEGER NOT NULL,
    fo17 INTEGER NOT NULL,
    fo18 INTEGER NOT NULL,
    fo19 INTEGER NOT NULL,
    fo20 INTEGER NOT NULL,
    fo21 INTEGER NOT NULL,
    fo22 INTEGER NOT NULL,
    fo23 INTEGER NOT NULL,
    fo24 INTEGER NOT NULL,
    fo25 INTEGER NOT NULL,
    fo26 INTEGER NOT NULL,
    fo27 INTEGER NOT NULL,
    fo28 INTEGER NOT NULL,
    fo29 INTEGER NOT NULL,
    fo30 INTEGER NOT NULL,
    fo31 INTEGER NOT NULL,
    fo32 INTEGER NOT NULL,
    fo33 INTEGER NOT NULL,
    fo34 INTEGER NOT NULL,
    fo35 INTEGER NOT NULL,
    fo36 INTEGER NOT NULL,
    fo37 INTEGER NOT NULL,
    fo38 INTEGER NOT NULL,
    fo39 INTEGER NOT NULL,
    fo40 INTEGER NOT NULL,
    fo41 INTEGER NOT NULL,
    fo42 INTEGER NOT NULL,
    fo43 INTEGER NOT NULL,
    fo44 INTEGER NOT NULL,
    fo45 INTEGER NOT NULL,
    fo46 INTEGER NOT NULL,
    fo47 INTEGER NOT NULL,
    fo48 INTEGER NOT NULL,
    fo49 INTEGER NOT NULL,
    fo50 INTEGER NOT NULL,
    fo51 INTEGER NOT NULL,
    fo52 INTEGER NOT NULL,
    fo53 INTEGER NOT NULL,
    fo54 INTEGER NOT NULL,
    fo55 INTEGER NOT NULL,
    fo56 INTEGER NOT NULL,
    fo57 INTEGER NOT NULL,
    fo58 INTEGER NOT NULL,
    fo59 INTEGER NOT NULL,
    fo60 INTEGER NOT NULL,
    fo61 INTEGER NOT NULL,
    fo62 INTEGER NOT NULL,
    fo63 INTEGER NOT NULL,
    fo64 INTEGER NOT NULL,
    fo65 INTEGER NOT NULL,
    fo66 INTEGER NOT NULL,
    fo67 INTEGER NOT NULL,
    fo68 INTEGER NOT NULL,
    fo69 INTEGER NOT NULL,
    fo70 INTEGER NOT NULL,
    fo71 INTEGER NOT NULL,
    fo72 INTEGER NOT NULL,
    fo73 INTEGER NOT NULL,
    user_id INTEGER REFERENCES users(user_id)
);

INSERT INTO fossils (user_id, fo1, fo2, fo3, fo4, fo5, fo6, fo7, fo8, fo9, fo10, fo11, fo12, fo13, fo14, fo15, fo16, fo17, fo18, fo19, fo20, fo21, fo22, fo23, fo24, fo25, fo26, fo27, fo28, fo29, fo30, fo31, fo32, fo33, fo34, fo35, fo36, fo37, fo38, fo39, fo40, fo41, fo42, fo43, fo44, fo45, fo46, fo47, fo48, fo49, fo50, fo51, fo52, fo53, fo54, fo55, fo56, fo57, fo58, fo59, fo60, fo61, fo62, fo63, fo64, fo65, fo66, fo67, fo68, fo69, fo70, fo71, fo72, fo73)
VALUES (1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);