// src/UpdateProgress.js
import React, { useState, useEffect } from "react";

function UpdateProgress() {
  const [progress, setProgress] = useState(0);
  console.log(progress);

  useEffect(() => {
    try {
      // Écouter la progression de la mise à jour
      window.electron.onUpdateProgress((progressObj) => {
        setProgress(progressObj.percent);
        // Écouter quand la mise à jour est prête
        window.electron.onUpdateReady(() => {
          alert("Update is ready to install");
        });
      });
    } catch (error) {}
  }, []);

  return (
    <div>
      {progress > 0 && (
        <div>
          <p>Mise à jour en cours : {progress.toFixed(2)}%</p>
          <progress value={progress} max="100"></progress>
        </div>
      )}
    </div>
  );
}

export default UpdateProgress;
