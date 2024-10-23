function onDownloadStart(download) {
  // Tentukan waktu jadwal download
  const now = new Date();
  const scheduleTime = new Date();
  scheduleTime.setHours(22, 30, 0, 0); // Set waktu ke 22:30

  if (scheduleTime > now) {
    setTimeout(() => {
      download.start();
    }, scheduleTime - now);
  } else {
    download.start();
  }
}
