
function makeElement(attributesArray = [], parentId = '', tag = 'div', isAppend = true) {
  let parentElement = document.body;
  if (parentId) parentElement = document.getElementById(parentId);
  const tempElement = document.createElement(tag);
  if (isAppend) parentElement.append(tempElement);
  else parentElement.prepend(tempElement);
  attributesArray.forEach(attributes => {
      if (attributes.length === 3) tempElement[attributes[0]][attributes[1]] = attributes[2];
      else tempElement[attributes[0]] = attributes[1];
  });
}