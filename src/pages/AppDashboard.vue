<script setup lang="ts">
import type { QTableProps } from 'quasar';
import { ref } from 'vue';

const columns: QTableProps['columns'] = [
  {
    name: 'name',
    label: 'Repository',
    field: (row) => row.name,
    align: 'left',
  },
  {
    name: 'version',
    label: 'Version',
    field: (row) => row.meta?.['dist-tags']?.latest,
    align: 'left',
  },
  {
    name: 'downloads',
    label: 'DLs/week',
    field: (row) => row.downloads?.lastWeek?.downloads,
    align: 'right',
    format: (val) => val?.toLocaleString(),
  },
];

interface Row {
  readonly name: string;
  downloads?: {
    lastWeek?: {
      readonly downloads: number;
      readonly end: string;
      readonly package: string;
      readonly start: string;
    };
  };
  meta?: any;
}

const rows = ref<Row[]>([
  { name: 'faker-js/faker' },
  { name: 'prettier/plugin-pug' },
]);

rows.value.forEach((repo) => {
  fetch(`https://api.npmjs.org/downloads/point/last-week/@${repo.name}`)
    .then((response) => response.json())
    .then((json) => {
      repo.downloads ??= {};
      repo.downloads.lastWeek = json;
    })
    .catch((error) => console.error(error));

  fetch(`https://registry.npmjs.cf/@${repo.name}`, {
    headers: {
      Accept:
        'application/vnd.npm.install-v1+json; q=1.0, application/json; q=0.8, */*',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      repo.meta = json;
    })
    .catch((error) => console.error(error));
});
</script>

<template lang="pug">
QPage.q-gutter-md(padding)
  QTable(
    :columns="columns",
    :rows="rows",
    row-key="name",
    :rows-per-page-options="[0]",
    hide-pagination
  )
</template>
