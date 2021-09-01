import s from './Filter.module.css';

export default function Filter({ value, onChange }) {
  return (
    <div>
      <label className={s.filter}>
        <input
          className={s.filterInput}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
