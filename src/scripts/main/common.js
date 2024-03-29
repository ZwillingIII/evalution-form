const ipr_competence = [
  {
    name: 'Личная эффективность',
    indicators: [
      'Настойчивость',
      'Саморазвитие',
      'Соблюдение сроков',
      'Восприятие обратной связи',
      'Рефлексия',
      'Цифровая грамотность',
      'Управление эмоциями'
    ]
  },
  {
    name: 'Эффективность 2',
    indicators: [
      'Настойчивость',
      'Саморазвитие',
      'Соблюдение сроков',
      'Восприятие обратной связи',
      'Рефлексия',
      'Цифровая грамотность',
      'Управление эмоциями'
    ]
  },
  {
    name: 'Эффективность 3',
    indicators: [
      'Настойчивость',
      'Саморазвитие',
      'Соблюдение сроков',
      'Восприятие обратной связи',
      'Рефлексия',
      'Цифровая грамотность',
      'Управление эмоциями'
    ]
  }
];

/*
* Открытие модальных окон
* @param string modalName селектор модального окна
* @param bool on открыть/закрыть
* */
function modal(modalName, on) {
  const modalsBlock = $('.modals');
  const modal = $(modalName);

  if (on) {
    modalsBlock.addClass('active');
    modal.addClass('active');
  } else {
    modalsBlock.removeClass('active');
    modal.removeClass('active');
  }
}

/*
* Отрисовка элементов ИПР
* @prop ing|string id ID блока
* */
function iprEl(id) {
  const tabBlock = document.createElement('div');
  tabBlock.classList.add('tab-block');
  tabBlock.id = `ipr-block-${id}`;
  tabBlock.setAttribute('data-id', id);

  const titleWrap = document.createElement('div');
  titleWrap.classList.add('tab-block__title-wrap');
  titleWrap.id = 'ipr-title-block';

  const blockName = document.createElement('div');
  blockName.classList.add('block-name');
  blockName.id = 'ipr-title';
  titleWrap.append(blockName);

  const close = document.createElement('img');
  close.classList.add('tab-block__close');
  close.id = 'ipr-close';
  close.setAttribute('src', 'assets/images/png/12.png');
  close.setAttribute('data-id', id);
  titleWrap.append(close)

  tabBlock.append(titleWrap);

  const selectWrap = document.createElement('div');
  selectWrap.classList.add('tab-block__select');
  selectWrap.id = 'ipr-select__block';

  const select = document.createElement('select');
  select.classList.add('form-select');
  select.id = 'ipr-select';
  select.setAttribute('aria-label', 'Выберите компетенцию');
  select.setAttribute('data-id', id);

  const option = document.createElement('option');
  option.textContent = 'Выберите компетенцию';
  option.setAttribute('selected', '');
  select.append(option);

  for (let i = 0; i < ipr_competence.length; i++) {
    const option = document.createElement('option');
    option.textContent = ipr_competence[i].name;
    option.value = i;
    select.append(option);
  }

  selectWrap.append(select)

  tabBlock.append(selectWrap);

  const tabTitle = document.createElement('div');
  tabTitle.classList.add('block-name');
  tabTitle.innerHTML = "Выберите индикаторы компетентности (от <span id='tag-count'>0</span> до 3):";
  tabBlock.append(tabTitle)

  const indicatorWrap = document.createElement('div');
  indicatorWrap.classList.add('tab-block__indicators-wrap');

  const notTags = document.createElement('p');
  notTags.classList.add('text');
  notTags.id = 'not-competence';
  notTags.textContent = 'Список тегов зависит от компетенции';
  indicatorWrap.append(notTags);

  const tagItems = document.createElement('div');
  tagItems.classList.add('tab-block__indicators-items');
  tagItems.id = 'ipr-tags';
  indicatorWrap.append(tagItems);

  tabBlock.append(indicatorWrap);

  const purpose = document.createElement('div');
  purpose.classList.add('tab-block__comment');

  const purposeName = document.createElement('div');
  purposeName.classList.add('block-name');
  purposeName.textContent = 'Цель:';
  purpose.append(purposeName);

  const purposeInput = document.createElement('textarea');
  purposeInput.setAttribute('rows', 1);
  purposeInput.setAttribute('placeholder', 'Ответь на вопрос, зачем ты развиваешь данную компетенцию и пропиши как ты поймешь, что цель достигнута');
  purpose.append(purposeInput);

  tabBlock.append(purpose);

  const devAction = document.createElement('div');
  devAction.classList.add('tab-block__comment');

  const devActionName = document.createElement('div');
  devActionName.classList.add('block-name');
  devActionName.textContent = 'Действия по развитию:';
  devAction.append(devActionName);

  const devActionInput = document.createElement('textarea');
  devActionInput.setAttribute('row', 2);
  devActionInput.setAttribute('placeholder', 'Заполни действия по развитию. Опиши в свободной форме, что конкретно будет выполняться для развития компетенции и укажи критерии успеха (напиши, как понять, что цель достигнута)');
  devAction.append(devActionInput);

  tabBlock.append(devAction);

  const inputs = document.createElement('div');
  inputs.classList.add('tab-block__inputs');

  const inputsWrap = document.createElement('div');
  inputsWrap.classList.add('tab-block__inputs-wrap', 'row', 'g-3');

  let inputsItem = document.createElement('div');
  inputsItem.classList.add('tab-block__inputs-item', 'col-sm');

  let inputName = document.createElement('div');
  inputName.classList.add('block-name');
  inputName.textContent = 'Метод развития';
  inputsItem.append(inputName);

  let inputSelect = document.createElement('select');
  inputSelect.classList.add('form-select', 'tab-block__inputs-input');
  inputSelect.setAttribute('aria-label', 'Выберите компетенцию');

  let inputSelectOption = document.createElement('option');
  inputSelectOption.setAttribute('selected', '');
  inputSelectOption.textContent = 'Выберите метод развития';
  inputSelect.append(inputSelectOption);

  inputsItem.append(inputSelect);

  inputsWrap.append(inputsItem);

  inputsItem = document.createElement('div');
  inputsItem.classList.add('tab-block__inputs-item', 'col-sm');

  inputName = document.createElement('div');
  inputName.classList.add('block-name');
  inputName.textContent = 'Сделаю до';
  inputsItem.append(inputName);

  let inputInput = document.createElement('input');
  inputSelect.classList.add('tab-block__inputs-input');
  inputSelect.setAttribute('placeholder', 'Выберите дату');

  inputsItem.append(inputInput);

  inputsWrap.append(inputsItem);

  inputsItem = document.createElement('div');
  inputsItem.classList.add('tab-block__inputs-item', 'col-sm-6');

  inputName = document.createElement('div');
  inputName.classList.add('block-name');
  inputName.textContent = 'Поддержка';
  inputsItem.append(inputName);

  inputInput = document.createElement('input');
  inputSelect.classList.add('tab-block__inputs-input');
  inputSelect.setAttribute('placeholder', '');

  inputsItem.append(inputInput);

  inputsWrap.append(inputsItem);

  inputs.append(inputsWrap);
  tabBlock.append(inputs)

  return tabBlock;
}

let ipr_competence_selected = []; // выбранные компетенции

$(document).ready(function() {
  // вывод компетенций в выпадающий список ИПР
  for (let i = 0; i < ipr_competence.length; i++) {
    $('#ipr-select').append($('<option>', {
      value: i,
      text: ipr_competence[i].name
    }));
  }

  // Обработчик выбора компетенции в ИПР
  $(document).on('change', '#ipr-select', function() {
    const val = $(this).val();
    const formID = $(this).attr('data-id');
    const title = $(`#ipr-block-${formID} #ipr-title`);
    const titleBlock = $(`#ipr-block-${formID} #ipr-title-block`);
    const tagsBlock = $(`#ipr-block-${formID} #ipr-tags`);
    const messNotCompetence = $(`#ipr-block-${formID} #not-competence`);

    title.text(ipr_competence[val].name.toUpperCase());
    titleBlock.addClass('selected');

    $(`#ipr-block-${formID} #ipr-select__block`).css('display', 'none');

    if (ipr_competence[val].indicators.length > 0) {
      for (let i = 0; i < ipr_competence[val].indicators.length; i++) {
        tagsBlock.append($('<input>', {
          type: 'checkbox',
          class: 'btn-check tag-btn-radio',
          name: `tags-${formID}`,
          id: `tag-${i}`,
          value: ipr_competence[val].indicators[i]
        }));
        tagsBlock.append($('<label>', {
          class: 'tag-btn',
          for: `tag-${i}`,
          text: ipr_competence[val].indicators[i]
        }))
      }
      tagsBlock.addClass('filled-in');

      messNotCompetence.css('display', 'none');
    }
  });

  // Обработчик нажатий по тегам
  $(document).on('change', '.tag-btn-radio', function(e) {
    const blockID = $(this).closest('.tab-block').attr('data-id');
    const val = $(this).val();
    const tagCountBlock = $(`#ipr-block-${blockID} #tag-count`);
    const tagElements = $(`#ipr-block-${blockID} #ipr-tags .tag-btn-radio:checked`);

    if (ipr_competence_selected[blockID] == undefined) {
      ipr_competence_selected[blockID] = [];
    }

    if (ipr_competence_selected[blockID].length >= 3) {
      $(this).prop('checked', false);
      modal('.modals-ipr__count', true);
    }

    let checkEl = $(`#ipr-block-${blockID} #ipr-tags .tag-btn-radio:checked`);

    ipr_competence_selected[blockID] = [];
    for (let i = 0; i < checkEl.length; i++) {
      ipr_competence_selected[blockID].push(checkEl[i].value);
    }

    tagCountBlock.text(ipr_competence_selected[blockID].length);
  });

  // Добавление нового блока
  $('.ipr-plus').click(function () {
    const lastEl = $('#ipr .tab-block').last();
    let nextID = Number($('#ipr .tab-block').last().attr('data-id'))+1;

    if (isNaN(nextID)) {
      nextID = 0;
      $('#ipr').prepend(iprEl(nextID));
    } else {
      lastEl.after(iprEl(nextID));
    }
  });

  // Ползунок
  $("#range-slider").ionRangeSlider({
    min: 0,
    max: 100,
    from: 0,
    postfix: '%',
    skin: 'round',
  });

  // обработчик закрытия элемента ИПР
  $(document).on('click', '#ipr-close', function () {
    const ID = $(this).attr('data-id');

    $(`#ipr-block-${ID}`).remove();
    ipr_competence_selected[ID] = [];
  });

  // закрытие модалок
  $(document).on('click', '#modal-close', function () {
    const modal = $(this).closest('.modal-el');
    const modals = $('.modals');

    modals.removeClass('active');
    modal.removeClass('active');
  })
});