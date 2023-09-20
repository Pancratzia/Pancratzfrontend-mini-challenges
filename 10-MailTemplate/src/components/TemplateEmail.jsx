export const TemplateEmail = ({ template, values }) => {
    const { name, message } = template;
  
    if (!name || !message) return null;
  
    const pairTemplateInputsWithValues = template.inputs.map((input, index) => {
      return { input, value: values[index] };
    });
  
    const messageReplacedWithValues = message.replace(
      /\{(\w+)\}/g,
      (match, input) => {
        return pairTemplateInputsWithValues.find((pair) => pair.input === input)
          .value;
      }
    );
  
    const messageWithLineBreaks = messageReplacedWithValues.replace(
      /\n/g,
      '<br>'
    );
  
    return (
      <>
        <h2 className="text-2xl font-bold text-center text-gray-700">{name}</h2>
        <p
          className="text-gray-500 p-2 text-center"
          dangerouslySetInnerHTML={{ __html: messageWithLineBreaks }}
        />
      </>
    );
  };