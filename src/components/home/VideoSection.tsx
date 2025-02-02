export const VideoSection = () => {
  return (
    <div className="py-16 bg-muted video-section">
      <video autoPlay muted  loop id="myVideo">
        <source src="/lovable-uploads/skin_scanner.mp4" type="video/mp4"/>
      </video>
    </div>
  );
};