export default function render(channel) {
  return `<a name=\"${channel.name}\" id=\"${channel.id}\" class=\"list-group-item\">
            <b>${channel.name}<b>
            <br>
            <small>${channel.description}</small>
          </a>`
};