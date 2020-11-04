import React, { useState } from 'react';
import { Canvas } from './Canvas';
import { Node } from './symbols';

export const Simple = () => (
  <div style={{ border: 'solid 1px blue', height: 650, width: 650 }}>
    <Canvas
      nodes={[
        {
          id: '1'
        },
        {
          id: '2'
        }
      ]}
      edges={[
        {
          id: '1-2',
          from: '1',
          to: '2'
        }
      ]}
    />
  </div>
);

export const Labels = () => (
  <div style={{ border: 'solid 1px blue', height: 650, width: 650 }}>
    <Canvas
      nodes={[
        {
          id: '1',
          text: 'Node 1'
        },
        {
          id: '2',
          text: 'Node 2'
        }
      ]}
      edges={[
        {
          id: '1-2',
          from: '1',
          to: '2'
        }
      ]}
    />
  </div>
);

export const Joins = () => (
  <div style={{ border: 'solid 1px blue', height: 650, width: 650 }}>
    <Canvas
      nodes={[
        {
          id: '1'
        },
        {
          id: '2'
        },
        {
          id: '3'
        },
        {
          id: '4'
        }
      ]}
      edges={[
        {
          id: '1-2',
          from: '1',
          to: '2'
        },
        {
          id: '1-3',
          from: '1',
          to: '3'
        },
        {
          id: '3-4',
          from: '3',
          to: '4'
        },
        {
          id: '2-4',
          from: '2',
          to: '4'
        }
      ]}
    />
  </div>
);

export const Selections = () => {
  const [selections, setSelections] = useState<any[]>([]);

  return (
    <div style={{ border: 'solid 1px blue', height: 650, width: 650 }}>
      <Canvas
        nodes={[
          {
            id: '1'
          },
          {
            id: '2'
          }
        ]}
        edges={[
          {
            id: '1-2',
            from: '1',
            to: '2'
          }
        ]}
        node={
          <Node
            onClick={(event, node) => {
              console.log('Selecting Node', event, node);
              setSelections([node]);
            }}
          />
        }
        onCanvasClick={(event) => {
          console.log('Canvas Clicked', event);
          setSelections([]);
        }}
      />
    </div>
  );
};

export default {
  title: 'Canvas',
  component: Canvas,
  parameters: {
    actions: {
      argTypesRegex: '^on.*'
    }
  }
};