type PriceDisplayProps = {
  total: string;
};

export function PriceDisplay({ total }: PriceDisplayProps) {
  return (
    <section aria-live="polite" className="price-display" aria-label="Your project price">
      <p>Your estimated price</p>
      <strong data-testid="price">{total}</strong>
    </section>
  );
}
