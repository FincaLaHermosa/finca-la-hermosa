# Analytics setup - Finca La Hermosa

## Estado del sitio

El sitio ya carga Google Tag Manager:

```txt
GTM-5QZ3N64K
```

El codigo del sitio manda eventos a `window.dataLayer`. GTM debe leer esos eventos y enviarlos a GA4 y Meta.

## Estado de GTM / GA4

GTM publicado:

```txt
Version 2 - GA4 base + eventos de cotizacion
```

Etiquetas GA4 publicadas:

- `GA4 - Google tag base`
- `GA4 - Lead - Quote Submit`
- `GA4 - Contact - WhatsApp Click`
- `GA4 - CTA - Quote Click`
- `GA4 - Funnel - Quote Step View`

Activadores publicados:

- `EV - quote_submit_success`
- `EV - whatsapp_click`
- `EV - quote_cta_click`
- `EV - quote_step_view`

Prueba en Tag Assistant:

- `quote_submit_success` activo y dispara `GA4 - Lead - Quote Submit`.
- `whatsapp_click` activo y dispara `GA4 - Contact - WhatsApp Click`.
- `quote_cta_click` y `quote_step_view` activos.

## IDs

- GA4 Measurement ID: `G-Q8981LR01Z`.
- Meta Pixel ID: numero largo de Pixel.

## Eventos disponibles en dataLayer

### Conversiones principales

| Evento | Uso |
|---|---|
| `quote_submit_success` | Lead principal: solicitud enviada desde cotizador. |
| `whatsapp_click` | Contacto directo por WhatsApp. |

### Microconversiones

| Evento | Uso |
|---|---|
| `quote_cta_click` | Clic hacia cotizador. |
| `quote_step_view` | Avance por pasos del cotizador. |
| `quote_event_type_select` | Tipo de evento seleccionado. |
| `quote_date_set` | Fecha tentativa elegida. |
| `quote_duration_select` | Duracion elegida. |
| `quote_guests_change` | Invitados ajustados. |
| `quote_addon_toggle` | Extra seleccionado o removido. |
| `package_quote_click` | Clic a cotizar desde paquete. |
| `package_filter_select` | Filtro de paquetes en Experiencias. |
| `home_experience_select` | Selector de experiencia en Home. |
| `space_gallery_open` | Apertura de galeria de espacio. |
| `space_gallery_select` | Cambio manual de espacio. |
| `faq_category_select` | Cambio de categoria FAQ. |
| `faq_question_open` | Pregunta FAQ abierta. |
| `contact_link_click` | Clic en email, telefono, maps o redes. |

## Configuracion recomendada en GA4

Marcar como conversion:

```txt
quote_submit_success
whatsapp_click
```

Mantener como eventos normales:

```txt
quote_cta_click
quote_step_view
quote_addon_toggle
package_quote_click
faq_question_open
```

## Configuracion recomendada en Meta Pixel

| Evento dataLayer | Evento Meta |
|---|---|
| `quote_submit_success` | `Lead` |
| `whatsapp_click` | `Contact` |
| `quote_cta_click` | `InitiateCheckout` o evento personalizado `QuoteCTA` |

## Pendiente en GA4

GA4 ya recibe usuarios en tiempo real. Falta esperar a que GA4 liste los eventos recientes y marcar como eventos clave:

```txt
quote_submit_success
whatsapp_click
```

No crear manualmente estos eventos todavia, salvo que despues de 24 horas no aparezcan en GA4.

## Orden de trabajo restante

1. Revisar GA4 despues de unas horas o al dia siguiente.
2. Marcar `quote_submit_success` y `whatsapp_click` como eventos clave.
3. Definir dashboard comercial de Finca La Hermosa.
4. Mas adelante: crear Meta Pixel y configurarlo en GTM.
