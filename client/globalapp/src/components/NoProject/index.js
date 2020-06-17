import React from 'react';

const NoProject = ({
  userHasNoProject
}) => {
    return (
      <div>
        {userHasNoProject && (
          <p>Oups, vous n'avez aucun projet enregistré...</p>
        )}
      </div>
  );
};

export default NoProject;
