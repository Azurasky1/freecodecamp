const snippets = require('./js/snippets');

(function(window, document, undefined) {
  const modules = [{
    title: 'chunkArrayInGroups',
    instructions:
      'Write a function that splits an array (first argument) into groups ' +
      'the length of size (second argument) and returns them as a ' +
      'two-dimensional array.',
    tests: [
      [
        '["a", "b", "c", "d"], 2',
        'chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]'
      ], [
        '[0, 1, 2, 3, 4, 5], 3',
        'chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]]'
      ], [
        '[0, 1, 2, 3, 4, 5], 2',
        'chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]]'
      ], [
        '[0, 1, 2, 3, 4, 5], 4',
        'chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]]'
      ], [
        '[0, 1, 2, 3, 4, 5, 6], 3',
        'chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]]'
      ], [
        '[0, 1, 2, 3, 4, 5, 6, 7, 8], 4',
        'chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]'
      ]
    ]
  }, {
    title: 'confirmEnding',
    instructions: 'instructions',
    tests: [
    ]
  }];

  var moduleContainer = document.getElementById('modules');
  var template = document.getElementById('module__template');
  var i;
  var test;

  for (i = 0; i < modules.length; i++) {
    var moduleTemplate = template.cloneNode(true);
    var title = document.createTextNode(modules[i].title);
    var instructions = document.createTextNode(modules[i].instructions);

    moduleTemplate.id = ['module', i].join('-');
    moduleTemplate.querySelector('.module__title').appendChild(title);
    moduleTemplate.querySelector('.module__copy').appendChild(instructions);

    for (test = 0; test < modules[i].tests.length; test++) {
      var section = document.createElement('div');
      var description = document.createElement('p');
      var paragraph = document.createElement('p');
      var script = [
        'snippets.', modules[i].title, '(',
        modules[i].tests[test][0], ')'
      ].join('');

      var descriptionText = document.createTextNode(modules[i].tests[test][1]);
      var result = document.createTextNode(eval(script).toString());

      description.appendChild(descriptionText);
      paragraph.appendChild(result);
      section.className = 'module__tests--test';
      section.appendChild(description).appendChild(paragraph);
      moduleTemplate.querySelector('.module__tests').appendChild(section);
    }

    moduleContainer.appendChild(moduleTemplate);
  }
})(window, document);
