--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: guesses; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.guesses (
    id integer NOT NULL,
    username text NOT NULL,
    "firstTeam" text NOT NULL,
    "secondTeam" text NOT NULL,
    winner text NOT NULL,
    "correctGuess" boolean
);


--
-- Name: guesses_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.guesses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: guesses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.guesses_id_seq OWNED BY public.guesses.id;


--
-- Name: guesses id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.guesses ALTER COLUMN id SET DEFAULT nextval('public.guesses_id_seq'::regclass);


--
-- Data for Name: guesses; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.guesses VALUES (2, 'oi', 'Brazil', 'Argentina', 'Brazil', NULL);
INSERT INTO public.guesses VALUES (4, 'oi', 'Brazil', 'Argentina', 'Brazil', NULL);
INSERT INTO public.guesses VALUES (6, 'oi', 'Brazil', 'Argentina', 'Brazil', true);
INSERT INTO public.guesses VALUES (7, 'oi', 'Brazil', 'Argentina', 'Brazil', true);
INSERT INTO public.guesses VALUES (8, 'oi', 'Brazil', 'Argentina', 'Brazil', true);
INSERT INTO public.guesses VALUES (9, 'tchau', 'Brazil', 'Argentina', 'Brazil', true);
INSERT INTO public.guesses VALUES (10, 'tchau', 'Brazil', 'Argentina', 'Brazil', true);
INSERT INTO public.guesses VALUES (11, 'tchau', 'Brazil', 'Argentina', 'Brazil', true);
INSERT INTO public.guesses VALUES (12, 'tchau', 'Brazil', 'Argentina', 'Brazil', true);
INSERT INTO public.guesses VALUES (13, 'Lucas', 'Brazil', 'Argentina', 'Brazil', true);


--
-- Name: guesses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.guesses_id_seq', 13, true);


--
-- Name: guesses guesses_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.guesses
    ADD CONSTRAINT guesses_pk PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

