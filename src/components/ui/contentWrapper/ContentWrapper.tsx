import Card from "../card/Card";
import "./ContentWrapper.scss";

type ContentWrapperProps = {
  title: string;
  content: JSX.Element;
};

const ContentWrapper = ({ content, title }: ContentWrapperProps) => {
  return (
    <div className="contentWrapper">
      <Card>
        <div className="content">
          <h4>{title}</h4>
          {content}
        </div>
      </Card>
    </div>
  );
};

export default ContentWrapper;
