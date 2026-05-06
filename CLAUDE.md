# Claude Code - Finca La Hermosa

Antes de trabajar en este proyecto:

1. Lee `CONTEXT.md`.
2. Lee `SESSION.md` si existe.
3. Sigue las reglas, criterios, decisiones y restricciones documentadas en `CONTEXT.md`.
4. Usa `SESSION.md` como estado temporal del trabajo actual, no como regla permanente.
5. Al cerrar una sesion, actualiza `SESSION.md` con lo que se hizo, archivos tocados, decisiones, pendientes y proximo paso recomendado.
6. Actualiza `CONTEXT.md` cuando haya decisiones estables, avances relevantes o cambios importantes del proyecto que deban mantenerse entre sesiones. No lo uses para notas temporales; eso va en `SESSION.md`.

## Reglas de contexto y tokens

- `CLAUDE.md` debe mantenerse como entrada minima para Claude Code: maximo 40 lineas.
- `CONTEXT.md` debe ser solo contexto estable del proyecto, no bitacora ni instrucciones para agentes.
- `CONTEXT.md` debe mantenerse curado: maximo recomendado 250 lineas.
- `SESSION.md` debe ser handoff temporal y operativo: maximo recomendado 120 lineas.
- No dupliques informacion entre `CLAUDE.md`, `CONTEXT.md` y `SESSION.md`.
- Si una decision ya no aplica, reemplazala o eliminala; no acumules contradicciones.
- Mantener maximo 5 entradas en el historial de `CONTEXT.md`.
- Al cerrar sesion, actualiza `SESSION.md` reemplazando el estado anterior, no apilando un diario infinito.

No dupliques aqui el contexto completo del proyecto. La fuente de verdad compartida es `CONTEXT.md`.
