function Select({name,onChange,musicalStyleList}) {
  return (
    <>
      <select name={name} onChange={onChange}>
        {musicalStyleList?.map((style) => (
          <option
            key={style.eventStyleId}
            value={style.eventStyleId.toString()}
          >
            {style.eventStyleName}
          </option>
        ))}
      </select>
    </>
  );
}
export default Select