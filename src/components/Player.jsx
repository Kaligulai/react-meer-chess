import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [draftName, setDraftName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    const trimmedName = draftName.trim();

    if (isEditing && trimmedName !== "") {
      setPlayerName(trimmedName);
      onChangeName(symbol, trimmedName);
    }

    setDraftName("");
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setDraftName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        placeholder={playerName}
        value={draftName}
        onChange={handleChange}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
