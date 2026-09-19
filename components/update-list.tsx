import { formatDate, getAreaName, type Update } from "@/lib/wolvie-data";
import { Reveal } from "./reveal";

function UpdateItem({ update }: { update: Update }) {
  const content = (
    <article className="updateItem">
      <div className="updateMeta">
        <span className="updateCat">{getAreaName(update.area)}</span>
        <span className="updateDate">{formatDate(update.date)}</span>
      </div>
      <div className="updateBody">
        <h3 className="updateTitle">{update.title}</h3>
        <p className="updateSummary">{update.summary}</p>
      </div>
      {update.image && (
        <img className="updateImg" src={update.image} alt="" />
      )}
    </article>
  );

  if (update.href) {
    return (
      <a className="updateLink" href={update.href}>
        {content}
      </a>
    );
  }
  return content;
}

export function UpdateList({ updates }: { updates: Update[] }) {
  if (updates.length === 0) {
    return <p className="emptyState">No updates published yet.</p>;
  }

  return (
    <ul className="updateList">
      {updates.map((update, i) => (
        <li key={update.id}>
          <Reveal delay={i * 0.06}>
            <UpdateItem update={update} />
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
