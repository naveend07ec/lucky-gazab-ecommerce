export interface MediaRecord {
  id: string;
  fileName: string;
  url: string;
  mimeType: string;
  sizeBytes: number;
  altText: string;
  uploadedBy?: string;
  createdAt: Date;
}

const mediaStore: MediaRecord[] = [
  {
    id: 'med-1',
    fileName: 'loreal-absolut-repair-mask.jpg',
    url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80',
    mimeType: 'image/jpeg',
    sizeBytes: 245000,
    altText: "L'Oréal Absolut Repair Hair Mask 250ml Jar",
    createdAt: new Date(Date.now() - 86400000)
  },
  {
    id: 'med-2',
    fileName: 'o3-facial-kit.jpg',
    url: 'https://images.unsplash.com/photo-1567928269937-ae1465228514?w=800&q=80',
    mimeType: 'image/jpeg',
    sizeBytes: 312000,
    altText: 'O3+ Professional Facial Kit Box',
    createdAt: new Date(Date.now() - 43200000)
  }
];

export class MediaService {
  static getMediaList(query?: { page?: number; limit?: number }) {
    const page = query?.page || 1;
    const limit = query?.limit || 20;
    const paginated = mediaStore.slice((page - 1) * limit, page * limit);
    return {
      data: paginated,
      meta: {
        page,
        limit,
        total: mediaStore.length,
        totalPages: Math.ceil(mediaStore.length / limit)
      }
    };
  }

  static uploadMedia(fileData: { fileName: string; url: string; mimeType: string; sizeBytes: number; altText?: string }) {
    const record: MediaRecord = {
      id: `med-${Date.now()}`,
      fileName: fileData.fileName,
      url: fileData.url,
      mimeType: fileData.mimeType,
      sizeBytes: fileData.sizeBytes,
      altText: fileData.altText || fileData.fileName,
      createdAt: new Date()
    };
    mediaStore.unshift(record);
    return record;
  }
}
