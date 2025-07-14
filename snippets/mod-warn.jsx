export const ModWarn = ({ streamerOnly = false }) => {
  return (
    <Warning>
      Esse comando está apenas disponível para{" "}
      {streamerOnly ? (
        <strong>streamers</strong>
      ) : (
        <>
          <strong>moderadores</strong> e <strong>streamers</strong>
        </>
      )}
      .
    </Warning>
  );
};
