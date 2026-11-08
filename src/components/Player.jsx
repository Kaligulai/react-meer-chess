import { useState } from "react";
export default function Player({InitialName, symbol, isActive}) {
    const [PlayerName, setPlayerName] = useState (InitialName);
    const [draftName, setDraftName] = useState ("");
    const [isEditing, setisEditing] = useState (false);
    function handleEditClick() {
        if (isEditing && draftName.trim() !== "") {
            setPlayerName(draftName.trim());
        }
        setDraftName("");
        setisEditing((editing) => !editing) ;
    }
    function handleChange(event) {
        setDraftName(event.target.value);
    }
    let editablePlayerName = <span className="player-name">{PlayerName}</span>
    if (isEditing) {
        editablePlayerName = <input type="text" required placeholder={PlayerName} value={draftName} onChange={handleChange}/>
    }
    return(
    <li className={isActive ? "active" : undefined}>
  <span className="player">
  {editablePlayerName}
  <span className="player-symbol">{symbol}</span>
  </span>
  <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
</li>
    );
}
