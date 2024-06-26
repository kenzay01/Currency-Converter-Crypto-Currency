function Skeleton({ times }) {
  return (
    <div>
      {[...Array(times)].map((e, i) => (
        <div key={i} className="skeleton"></div>
      ))}
    </div>
  );
}
export default Skeleton;
