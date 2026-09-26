import { useState } from "react";
import styles from "./SignupButton.module.css";

const WORKER_URL = "https://helloworld.alvie-dev.workers.dev";

// Once a game is added, a Steam link already pulls in its description, image
// and release date automatically
const STEAM_LINK = /store\.steampowered\.com\/app\/\d+/i;

type Props = {
  type: "game" | "developer";
  label: string;
};

function SignupButton({ type, label }: Props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const [release, setRelease] = useState("");
  const [links, setLinks] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const hasSteam = STEAM_LINK.test(links);

  const releaseNeeded = type === "game" && !hasSteam;
  const descriptionNeeded = type === "game" && !hasSteam;

  const canSubmit =
    name.trim() !== "" &&
    contact.trim() !== "" &&
    (type === "developer" || team.trim() !== "") &&
    (!releaseNeeded || release.trim() !== "") &&
    (!descriptionNeeded || description.trim() !== "");

  function reset() {
    setName("");
    setTeam("");
    setRelease("");
    setLinks("");
    setDescription("");
    setLogo("");
    setContact("");
  }

  async function handleSubmit() {
    if (!canSubmit) return;
    setStatus("sending");

    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "signup",
          type,
          name,
          team: type === "game" ? team : undefined,
          release: releaseNeeded ? release || undefined : undefined,
          links: links || undefined,
          description:
            type === "developer" || descriptionNeeded
              ? description || undefined
              : undefined,
          logo: type === "developer" ? logo || undefined : undefined,
          contact,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setTimeout(() => {
          setOpen(false);
          setStatus("idle");
          reset();
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <span className={styles.wrapper}>
      <button className={styles.trigger} onClick={() => setOpen(true)}>
        {label}
      </button>

      {open && (
        <div className={styles.modal}>
          <div className={styles.modalInner}>
            <h3>
              {type === "game"
                ? "Agrega tu juego"
                : "Agrégate como desarrollador"}
            </h3>
            <p>
              Cuéntanos los detalles y un admin lo agregará al sitio. Te
              contactaremos si hace falta algo más.
            </p>

            <label className={styles.field}>
              {type === "game" ? "Nombre del juego" : "Nombre del estudio"}
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            {type === "game" && (
              <label className={styles.field}>
                Desarrollador(es) / estudio
                <input
                  type="text"
                  value={team}
                  onChange={(e) => setTeam(e.target.value)}
                />
              </label>
            )}

            <label className={styles.field}>
              Links ({type === "game" ? "Steam, " : ""}sitio web, redes
              sociales...)
              <textarea
                className={styles.links}
                value={links}
                onChange={(e) => setLinks(e.target.value)}
                placeholder={"Uno por línea"}
              />
            </label>

            {type === "game" && hasSteam && (
              <p className={styles.autoNote}>
                Vimos tu link de Steam: la descripción, imagen y fecha de
                lanzamiento se toman de ahí automáticamente.
              </p>
            )}

            {releaseNeeded && (
              <label className={styles.field}>
                Fecha de lanzamiento (o "TBD")
                <input
                  type="text"
                  value={release}
                  onChange={(e) => setRelease(e.target.value)}
                  placeholder="Q2 2026, TBD, etc."
                />
              </label>
            )}

            {type === "developer" && (
              <label className={styles.field}>
                Logo o ícono (link a una imagen)
                <input
                  type="text"
                  value={logo}
                  onChange={(e) => setLogo(e.target.value)}
                  placeholder="Si tienes Bluesky, usamos tu foto de perfil automáticamente"
                />
              </label>
            )}

            {(type === "developer" || descriptionNeeded) && (
              <label className={styles.field}>
                {type === "game" ? "Descripción" : "Sobre ti / tu estudio"}
                <textarea
                  className={styles.notes}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
            )}

            <label className={styles.field}>
              Contacto (correo o usuario de Discord)
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </label>

            <div className={styles.actions}>
              <button
                className={styles.cancel}
                onClick={() => {
                  setOpen(false);
                  setStatus("idle");
                }}
              >
                Cancelar
              </button>
              <button
                className={styles.submit}
                onClick={handleSubmit}
                disabled={!canSubmit || status === "sending"}
              >
                {status === "sending"
                  ? "Enviando..."
                  : status === "sent"
                    ? "Enviado!"
                    : status === "error"
                      ? "Error, intenta de nuevo"
                      : "Enviar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </span>
  );
}

export default SignupButton;
