export const CandidateProfile = () => {
  const name = 'Peter';
  const experience = 5;
  const isAvailable = true;

  return (
    <>
      <h2>{name}</h2>
      <p> Started in {2025 - experience}</p>
      <p> status: {isAvailable ? 'Available' : 'Not'}</p>
    </>
  );
};
