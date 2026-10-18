CREATE TABLE public.early_access_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT email_len CHECK (char_length(email) BETWEEN 3 AND 255)
);
CREATE UNIQUE INDEX early_access_signups_email_idx ON public.early_access_signups (lower(email));
GRANT INSERT ON public.early_access_signups TO anon, authenticated;
GRANT ALL ON public.early_access_signups TO service_role;
ALTER TABLE public.early_access_signups ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can join early access" ON public.early_access_signups
  FOR INSERT TO anon, authenticated WITH CHECK (char_length(email) BETWEEN 3 AND 255);