import { useState } from 'react';
import { getClient } from '../api/client';
import AudioForm from '../components/AudioForm';
import { mapRange } from '../utils/helper';
import catchError from '../api/catchError';
import { message } from 'antd';

export default function Upload() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [busy, setBusy] = useState(false);
  const handleUpload = async (formData: FormData) => {
    setBusy(true);

    try {
      const client = await getClient();
      await client.post('/audio/create', formData, {
        onUploadProgress(progressEvent) {
          const uploaded = mapRange({
            inputMin: 0,
            inputMax: progressEvent.total || 0,
            outputMin: 0,
            outputMax: 100,
            inputValue: progressEvent.loaded,
          });
          if (uploaded >= 100) setBusy(false);
          setUploadProgress(Math.floor(uploaded));
        },
      });
    } catch (error) {
      const errorMessage = catchError(error);
      message.error(errorMessage, 5);
    }
    setBusy(false);
  };

  return (
    <div>
      <AudioForm
        onSubmit={handleUpload}
        busy={busy}
        progress={uploadProgress}
      />
    </div>
  );
}
