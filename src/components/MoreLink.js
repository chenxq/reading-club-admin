import React from 'react';

export default function MoreLink({ linkUrl }) {
  return <a href={linkUrl || ''}>More Detail</a>;
}
