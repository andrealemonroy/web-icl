export interface NewsType {
  activo: string;
  autorizado: string;
  autorizado_por: string;
  descripcion_noticia: string;
  fecha_noticia: string;
  id: number;
  id_categoria_noticia: number;
  titulo_noticia: string;
  url_imagen_portada: string;
}

export interface VideoType {
  activo: string;
  autorizado: string;
  autorizado_por: string;
  descripcion_video: string;
  fecha_video: string;
  id: number;
  id_categoria_video: number;
  titulo_video: string;
  url_video: string;
  url_imagen_video: string;
}
export interface NormasType {
  id: number;
  tipo_norma: string;
  denominacion_norma: string;
  url_norma: string;
  autorizado: string;
  autorizado_por: string;
  activo: string;
}
