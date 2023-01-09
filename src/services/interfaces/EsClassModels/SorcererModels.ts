export interface Sorcererlevel {
  creating_spell_slots: SorcererSpellsModels[] 
  metamagic_known: number
  sorcery_points: number
}

export interface SorcererSpellsModels {
  sorcery_point_cost: number
  spell_slot_level: number
}