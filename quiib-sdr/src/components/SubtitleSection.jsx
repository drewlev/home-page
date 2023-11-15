import './SubtitleSection.css'; // Ensure you have this CSS file for styling

const SubtitleSection = ({ subtitle, title, content }) => {
  return (
    <section className="subtitle-section">
      {title && <h1>{title}</h1>}
      {subtitle && <h2>{subtitle}</h2>}
      {content && <div className="content" dangerouslySetInnerHTML={{ __html: content }} />}
    </section>
  );
};

export default SubtitleSection;
