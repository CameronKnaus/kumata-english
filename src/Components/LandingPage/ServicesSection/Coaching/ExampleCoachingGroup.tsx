import styles from '../../../../Styles/Components/LandingPage/ServicesSection/Coaching/ExampleCoachingGroup.module.css';

interface ExampleCoachingGroupProps {
  header: string;
  contentList?: string[];
}

export default function ExampleCoachingGroup({
  header,
  contentList = [],
}: ExampleCoachingGroupProps) {
  return (
    <div className="average-container">
      <div className={styles.exampleTile}>
        <h2 className={styles.header}>{header}</h2>
        <ul className={styles.exampleList}>
          {contentList.map((item, index) => (
            <li key={`coaching-content-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
