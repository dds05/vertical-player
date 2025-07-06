"use client"

const DummyVideoPlayer = () => {
    return (
      <div className="vertical-player-wrapper-dummy" style={{ margin: 'auto' }}>
        <div className="dummy-placeholder">
          <img
            src="https://picsum.photos/200/300"
            alt="Placeholder"
            className="vertical-player-thumbnail"
          />
        </div>
      </div>
    );
  };
  
  export default DummyVideoPlayer;