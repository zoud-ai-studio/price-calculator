type EmailButtonProps = {
  href: string;
};

export function EmailButton({ href }: EmailButtonProps) {
  return (
    <a className="email-button" href={href}>
      Email us this quote
    </a>
  );
}
