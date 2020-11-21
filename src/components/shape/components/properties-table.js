import styled from 'styled-components';
import { H3, responsive } from 'ui';

const Section = styled.div`
  margin: 30px;

  h3 {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 36px;
    margin-bottom: 20px;
    ${responsive.xs} {
      text-align: center;
    }
  }
`;

const PropertiesOuter = styled.div`
  overflow: hidden;
  border-bottom: 1px solid var(--color-main-background);
`;

const Properties = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: Nunito Sans;
  font-style: normal;
  font-size: 16px;
  line-height: 22px;
  color: #2f2b27;

  tr:not(:last-child) {
    border-bottom: 2px solid #ebebeb;
  }

  td {
    padding: 10px 0;
    border: 0px solid var(--color-main-background);
  }

  td:first-child {
    font-weight: 800;
    width: 36%;
  }

  tr:not(:first-child) td {
    border-top-width: 1px;
  }
`;

export default function PropertiesTable({ sections }) {
  return (
    <div>
      {sections?.map((section, i) => (
        <Section key={i}>
          <H3>{section.title}</H3>
          <PropertiesOuter>
            <Properties>
              <tbody>
                {section.properties.map((property, i) => (
                  <tr key={i}>
                    <td>{property.key}</td>
                    <td>{property.value}</td>
                  </tr>
                ))}
              </tbody>
            </Properties>
          </PropertiesOuter>
        </Section>
      ))}
    </div>
  );
}
