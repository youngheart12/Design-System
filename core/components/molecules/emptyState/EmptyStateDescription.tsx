import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '@/utils/types';
import { Text } from '@/index';
import { TextSize } from 'types';
import EmptyStateContext from './EmptyStateContext';

export interface EmptyDescriptionProps extends BaseProps {
  /**
   * The content to be displayed within the component
   * Can be any renderable React Text.
   */
  children: React.ReactText;
}

const EmptyStateDescription = (props: EmptyDescriptionProps) => {
  const { children, className, ...rest } = props;
  const contextProp = React.useContext(EmptyStateContext);

  const { size = 'standard', maxWidth } = contextProp;

  const textSize: Record<string, TextSize> = {
    standard: 'regular',
    compressed: 'regular',
    tight: 'small',
  };

  const descriptionClasses = classNames(
    {
      [`EmptyState-text`]: true,
      ['mt-3']: true,
    },
    className
  );

  return (
    <Text
      size={textSize[size]}
      style={{ maxWidth: maxWidth }}
      appearance="subtle"
      className={descriptionClasses}
      data-test="DesignSystem-EmptyState--Text"
      {...rest}
    >
      {children}
    </Text>
  );
};

export default EmptyStateDescription;
