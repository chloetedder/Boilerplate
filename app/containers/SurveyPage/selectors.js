import {createSelector} from 'reselect';

const selectSubmit = (state) => state.get('submit');

const makeSelectAge = () => createSelector(
    selectSubmit,
    (submitState) => submitState.get('age')
);

const makeSelectColor = () => createSelector(
    selectSubmit,
    (submitState) => submitState.get('color')
);

const makeSelectFood = () => createSelector(
    selectSubmit,
    (submitState) => submitState.get('food')
);

const makeSelectMississippi = () => createSelector(
    selectSubmit,
    (submitState) => submitState.get('mississippi')
);

const makeSelectDog = () => createSelector(
    selectSubmit,
    (submitState) => submitState.get('dog')
);

const makeSelectError = () => createSelector(
    selectSubmit,
    (submitState) => submitState.get('error')
);