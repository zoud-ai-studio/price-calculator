type UrgencyToggleProps = {
  value: boolean;
  onChange: (isUrgent: boolean) => void;
};

export function UrgencyToggle({ value, onChange }: UrgencyToggleProps) {
  return (
    <fieldset>
      <legend>Need it within 1 week?</legend>
      <p>Delivery within 1 week adds 20% to the price.</p>
      <div className="option-list option-list--inline">
        <label className="option">
          <input checked={!value} name="urgency" onChange={() => onChange(false)} type="radio" />
          <span>No</span>
        </label>
        <label className="option">
          <input checked={value} name="urgency" onChange={() => onChange(true)} type="radio" />
          <span>Yes</span>
        </label>
      </div>
    </fieldset>
  );
}
