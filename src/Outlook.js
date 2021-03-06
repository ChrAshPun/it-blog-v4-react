import React from "react";
import articleData from "./articledata";
import Article from "./Article";

function Outlook() {
  return (
    <div>
      {articleData.map(item => {
        if (item.category === "OUTLOOK") {
          return (
            <Article
              category={item.category}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              instructions={item.instructions.map(item => (
                <li>{item}</li>
              ))}
              img={item.img}
              alt={item.alt}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Outlook;
