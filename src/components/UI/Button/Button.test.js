<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> a8ed0603d182b38347aea24421229e989cf08e65
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('should render correctly', () => {
    const { getByRole } = render(<Button />);
    getByRole('button');
  });
});
