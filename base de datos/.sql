CREATE TABLE IF NOT EXISTS public.roles
(
    rol_codigo integer NOT NULL DEFAULT nextval('roles_rol_codigo_seq'::regclass),
    rol_fecha date,
    rol_descripcion character varying COLLATE pg_catalog."default",
    usuario character varying COLLATE pg_catalog."default",
    CONSTRAINT roles_pkey PRIMARY KEY (rol_codigo),
    CONSTRAINT rol_usuario_fkey FOREIGN KEY (rol_codigo)
        REFERENCES public.usuarios (usu_codigo) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.roles
    OWNER to postgres;