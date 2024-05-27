<template>
  <client-only>
    <div>
      <pageHeader />

      <div>
        <slot />
      </div>

      <pageFooter />
    </div>
  </client-only>
</template>
